import React, { useState, useEffect } from 'react'
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
import PropTypes from 'prop-types'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
function EmployeeTable(emptable) {
  //   const [employeestabledata, setEmployeesTableData] = useState(props)
  //   console.log('employeestabledata', employeestabledata)
  // console.log('propppps', props)
  console.log('empdata in emptable', emptable)
  //   useEffect(() => {
  //     setEmployeesTableData(props)
  //   }, [])

  return (
    <div>
      <div>
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
                <div>Yiorgos Avraamu </div>
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
            <CTableRow>
              <CTableDataCell className="text-center">
                <CAvatar size="md" src="/avatars/2.jpg" status="danger" />
              </CTableDataCell>
              <CTableDataCell>
                <div>Avram Tarasios</div>
                <div className="small text-medium-emphasis">
                  <span>Recurring</span> | Registered: Jan 1, 2015
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cif-br" title="br" id="br" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="clearfix">
                  <div className="float-start">
                    <strong>10%</strong>
                  </div>
                  <div className="float-end">
                    <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <CProgress thin color="info" value={10} />
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cib-cc-visa" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="small text-medium-emphasis">Last login</div>
                <strong>5 minutes ago</strong>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="text-center">
                <CAvatar size="md" src="/avatars/3.jpg" status="warning" />
              </CTableDataCell>
              <CTableDataCell>
                <div>Quintin Ed</div>
                <div className="small text-medium-emphasis">
                  <span>New</span> | Registered: Jan 1, 2015
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cif-in" title="in" id="in" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="clearfix">
                  <div className="float-start">
                    <strong>74%</strong>
                  </div>
                  <div className="float-end">
                    <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <CProgress thin color="warning" value={74} />
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cib-cc-stripe" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="small text-medium-emphasis">Last login</div>
                <strong>1 hour ago</strong>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="text-center">
                <CAvatar size="md" src="/avatars/4.jpg" status="secondary" />
              </CTableDataCell>
              <CTableDataCell>
                <div>Enéas Kwadwo</div>
                <div className="small text-medium-emphasis">
                  <span>New</span> | Registered: Jan 1, 2015
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cif-fr" title="fr" id="fr" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="clearfix">
                  <div className="float-start">
                    <strong>98%</strong>
                  </div>
                  <div className="float-end">
                    <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <CProgress thin color="danger" value={98} />
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cib-cc-paypal" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="small text-medium-emphasis">Last login</div>
                <strong>Last month</strong>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="text-center">
                <CAvatar size="md" src="/avatars/5.jpg" status="success" />
              </CTableDataCell>
              <CTableDataCell>
                <div>Agapetus Tadeáš</div>
                <div className="small text-medium-emphasis">
                  <span>New</span> | Registered: Jan 1, 2015
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cif-es" title="es" id="es" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="clearfix">
                  <div className="float-start">
                    <strong>22%</strong>
                  </div>
                  <div className="float-end">
                    <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <CProgress thin color="info" value={22} />
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cib-cc-apple-pay" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="small text-medium-emphasis">Last login</div>
                <strong>Last week</strong>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell className="text-center">
                <CAvatar size="md" src="/avatars/6.jpg" status="danger" />
              </CTableDataCell>
              <CTableDataCell>
                <div>Friderik Dávid</div>
                <div className="small text-medium-emphasis">
                  <span>New</span> | Registered: Jan 1, 2015
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cif-pl" title="pl" id="pl" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="clearfix">
                  <div className="float-start">
                    <strong>43%</strong>
                  </div>
                  <div className="float-end">
                    <small className="text-medium-emphasis">Jun 11, 2015 - Jul 10, 2015</small>
                  </div>
                </div>
                <CProgress thin color="success" value={43} />
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" name="cib-cc-amex" />
              </CTableDataCell>
              <CTableDataCell>
                <div className="small text-medium-emphasis">Last login</div>
                <strong>Yesterday</strong>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </div>
  )
}
EmployeeTable.propTypes = {
  emptable: PropTypes.array.isRequired,
  //title: PropTypes.string.isRequired,
}

export default EmployeeTable
