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
import Amplify, { Predictions } from "aws-amplify";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function App() {
  const [response, setResponse] = useState("");
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
      .then((result) => setResponse(JSON.stringify(result, null, 2)))
      .catch((err) => setResponse(JSON.stringify(err, null, 2)));
  }

  function setText(event) {
    setTextToInterpret(event.target.value);
  }

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
                  <FormGroup>
                    <Label for="exampleName">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="John Doe" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="johndoe@sjsu.edu" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Suggestions</Label>
                    <Input
                      addonType="append"
                      type="textarea"
                      value={textToInterpret}
                      onChange={setText}
                    />
                    <br/>
                    <Button
                      className="btn btn-secondary"
                      onClick={interpretFromPredictions}
                      size="lg"
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
              <br />
              <CardText>
                <h2 classname="text-center">{response}</h2>
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
