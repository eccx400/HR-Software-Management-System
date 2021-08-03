import React, { useState, useEffect, lazy } from 'react'
import { Storage, API, graphqlOperation } from 'aws-amplify'
import { createPicture } from '../../../graphql/mutations'
import { listPictures } from '../../../graphql/queries'
// import Predictions from '@aws-amplify/predictions'
import awsExports from '../../../aws-exports'

import UploadEmployees from './UploadEmployees'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
function Employees(props) {
  const [inidata] = ''
  const [empdata, setEmpdata] = useState([])

  useEffect(() => {
    getAllEmpDataToState()
  }, [inidata])

  const getAllEmpDataToState = async () => {
    const result = await API.graphql(graphqlOperation(listPictures))
    console.log('inside before build 1', result)
    // let imageArray = await buildImageArray(result.data.listPictures.items);
    // setImages(imageArray);
    setEmpdata(result)
    let empArray = await buildEmpArray(result.data.listPictures.items)
    setEmpdata(empArray)
    console.log('empdattattata', empdata)
  }

  const buildEmpArray = async (listPictures) => {
    return await getEmpFileList(listPictures)
  }
  const getEmpFileList = async (imageList) => {
    return Promise.all(
      imageList.map(async (i) => {
        return getOneFormatedEmp(i)
      }),
    )
  }

  const getOneFormatedEmp = async (emp) => {
    console.log('getOneFormatedImage', emp)
    return {
      //src: await Storage.get(image.file.key),
      id: emp.id,
      owner: emp.owner,
      tag: emp.tag,
    }
  }

  return (
    <div>
      <UploadEmployees />

      <CTable hover responsive align="middle" className="mb-0 border">
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell className="text-center">
              <CIcon name="cil-people" />
            </CTableHeaderCell>
            <CTableHeaderCell>EmployeeName</CTableHeaderCell>
            <CTableHeaderCell>EmpId</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Department</CTableHeaderCell>
            <CTableHeaderCell>Designation</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Pay Grade</CTableHeaderCell>
            <CTableHeaderCell>Activity</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell className="text-center">
              <CAvatar size="md" src="/avatars/1.jpg" status="success" />
            </CTableDataCell>
            <CTableDataCell>
              <div>Yiorgos Avraamu</div>
              <div className="small text-medium-emphasis">
                <span>New</span> | Joined: Jan 1, 2015
              </div>
            </CTableDataCell>
            <CTableDataCell>
              <p>11111</p>
            </CTableDataCell>
            <CTableDataCell className="text-center">
              <CIcon size="xl" name="cif-us" title="us" id="us" />
              <p>Tech</p>
            </CTableDataCell>
            <CTableDataCell>
              <div className="clearfix">
                <div>
                  <p> SDE1</p>
                </div>
              </div>
            </CTableDataCell>
            <CTableDataCell className="text-center">
              <CIcon size="xl" name="cib-cc-mastercard" />
              <p>A</p>
            </CTableDataCell>
            <CTableDataCell>
              <div className="small text-medium-emphasis">Last login</div>
              <strong>10 sec ago</strong>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  )
}
export default Employees
