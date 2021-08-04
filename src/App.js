import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Jumbotron,
  Container,
} from "reactstrap";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, { API, graphqlOperation, Predictions } from "aws-amplify";
import { createEmployee } from "./graphql/mutations";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function App() {
  const [response, setResponse] = useState("");
  const [names] = useState("John Doe");
  const [emails] = useState("johndoe@sjsu.edu");
  const [textToInterpret, setTextToInterpret] = useState(
    "Please enter your suggestions here"
  );

  function interpretFromPredictions() {
    Predictions.interpret({
      text: {
        source: {
          text: textToInterpret,
        },
        type: "ALL",
      },
    })
      .then((result) => {
        console.log(result.textInterpretation.sentiment)
        setResponse(JSON.stringify(result.textInterpretation.sentiment, null, 2))
      })
      .catch((err) => {
        setResponse(JSON.stringify(err, null, 2))
      });
  }

  function setText(event) {
    setTextToInterpret(event.target.value);
  }

  async function sendToDB(){
    const todo = {
      name: names,
      email: emails,
      description: response,
    };
    console.log(response)
    //return await API.graphql(graphqlOperation(createEmployee, { input: todo }));
  }

  const handleFormSubmit = (e) => {
    interpretFromPredictions();
    sendToDB();
  };

  return (
    <div className="Text">
      <div class="container-full-bg">
        <Jumbotron fluid>
          <Container className="themed-container" fluid="md">
            <Card>
              <CardTitle>
                <h1 className="display-3">Employee Sentiment Analysis</h1>
              </CardTitle>
              <br />
              <CardBody>
                <Form>
                  <FormGroup onSubmit={handleFormSubmit}>
                    <Label for="exampleName">Name</Label>
                    <Input type="name" placeholder= "John Doe" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" placeholder= "johndoe@sjsu.edu" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSuggestions">Suggestions</Label>
                    <Input
                      addonType="append"
                      type="textarea"
                      value={textToInterpret}
                      onChange={setText}
                    />
                    <br />
                    <Button
                      className="btn btn-secondary"
                      onClick={handleFormSubmit}
                      size="lg"
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
              <br />
              <CardText>
                <h2 className="text-center">{response}</h2>
              </CardText>
              <AmplifySignOut />
            </Card>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
