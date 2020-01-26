import React from 'react';
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import './showTime.css';
import { useHistory } from 'react-router-dom';



const ShowTime = ({ information, enrollment, final, dis_Profs }) => {
    let history = useHistory();
    const [group, setGroup] = React.useState(0);
    let isRotate = enrollment.rotationEnrollment;
    enrollment = enrollment.enrollment;
    if (!final || enrollment.length === 0 || !final.genes) {
        return <><h1>Something went wrong...</h1>
            <Button variant="primary" style={{ marginTop: '38px' }}
                onClick={() => {
                    history.push('/1')

                }}
            >صفحه اصلی</Button></>
    }
    let table = final.genes;
    let shanbe_8_10 = "";
    let shanbe_10_12 = "";
    let shanbe_2_4 = "";
    let shanbe_4_6 = "";

    let yekshanbe_8_10 = "";
    let yekshanbe_10_12 = "";
    let yekshanbe_2_4 = "";
    let yekshanbe_4_6 = "";

    let doshanbe_8_10 = "";
    let doshanbe_10_12 = "";
    let doshanbe_2_4 = "";
    let doshanbe_4_6 = "";

    let seshanbe_8_10 = "";
    let seshanbe_10_12 = "";
    let seshanbe_2_4 = "";
    let seshanbe_4_6 = "";

    let chaharshanbe_8_10 = "";
    let chaharshanbe_10_12 = "";
    let chaharshanbe_2_4 = "";
    let chaharshanbe_4_6 = "";





    for (let i = 0; i < table.length; i++) {

        if (parseInt(enrollment[i][0]) === dis_Profs[group]) {

            let star = isRotate[i] ? "*" : "";
            if (parseInt(table[i][0]) === 1) {

                if (parseInt(table[i][1]) === 1) {
                    shanbe_8_10 += information.master[enrollment[i][0]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';
                }


                if (parseInt(table[i][1]) === 2) {
                    shanbe_10_12 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';


                }


                if (parseInt(table[i][1]) === 3) {
                    shanbe_2_4 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }


                if (parseInt(table[i][1]) === 4) {
                    shanbe_4_6 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }


            }








            


            if (parseInt(table[i][0]) === 2) {



                if (parseInt(table[i][1]) === 1) {
                    yekshanbe_8_10 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star;
                }


                if (parseInt(table[i][1]) === 2) {
                    yekshanbe_10_12 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';


                }


                if (parseInt(table[i][1]) === 3) {
                    yekshanbe_2_4 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }


                if (parseInt(table[i][1]) === 4) {
                    yekshanbe_4_6 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }



            }
















            if (parseInt(table[i][0]) === 3) {
                if (parseInt(table[i][1]) === 1) {
                    doshanbe_8_10 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star;
                }


                if (parseInt(table[i][1]) === 2) {
                    doshanbe_10_12 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';


                }


                if (parseInt(table[i][1]) === 3) {
                    doshanbe_2_4 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }


                if (parseInt(table[i][1]) === 4) {
                    doshanbe_4_6 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }


            }


            if (parseInt(table[i][0]) === 4) {
                if (parseInt(table[i][1]) === 1) {
                    seshanbe_8_10 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star;
                }


                if (parseInt(table[i][1]) === 2) {
                    seshanbe_10_12 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';


                }


                if (parseInt(table[i][1]) === 3) {
                    seshanbe_2_4 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }


                if (parseInt(table[i][1]) === 4) {
                    seshanbe_4_6 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }



            }


            if (parseInt(table[i][0]) === 5) {
                if (parseInt(table[i][1]) === 1) {
                    chaharshanbe_8_10 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star;
                }


                if (parseInt(table[i][1]) === 2) {
                    chaharshanbe_10_12 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';


                }


                if (parseInt(table[i][1]) === 3) {
                    chaharshanbe_2_4 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }


                if (parseInt(table[i][1]) === 4) {
                    chaharshanbe_4_6 += information.group[enrollment[i][2]] + ' - ' + information.course[enrollment[i][1]] + star + '| \n';



                }



            }


        }



    }



    return (

        <div className='all_Container'>
            <Table striped bordered hover style={{ direction: 'rtl' }}>
                <thead>
                    <tr>
                        <th>ساعت</th>
                        <th>شنبه</th>
                        <th>یکشنبه</th>
                        <th>دوشنبه</th>
                        <th>سه شنبه</th>
                        <th>چهارشنبه</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8-10</td>
                        <td>{shanbe_8_10}</td>
                        <td>{yekshanbe_8_10}</td>
                        <td>{doshanbe_8_10}</td>
                        <td>{seshanbe_8_10}</td>
                        <td>{chaharshanbe_8_10}</td>
                    </tr>
                    <tr>
                        <td>10-12</td>
                        <td>{shanbe_10_12}</td>
                        <td>{yekshanbe_10_12}</td>
                        <td>{doshanbe_10_12}</td>
                        <td>{seshanbe_10_12}</td>
                        <td>{chaharshanbe_10_12}</td>
                    </tr>
                    <tr>
                        <td>2-4</td>
                        <td>{shanbe_2_4}</td>
                        <td>{yekshanbe_2_4}</td>
                        <td>{doshanbe_2_4}</td>
                        <td>{seshanbe_2_4}</td>
                        <td>{chaharshanbe_2_4}</td>
                    </tr>
                    <tr>
                        <td>4-6</td>
                        <td>{shanbe_4_6}</td>
                        <td>{yekshanbe_4_6}</td>
                        <td>{doshanbe_4_6}</td>
                        <td>{seshanbe_4_6}</td>
                        <td>{chaharshanbe_4_6}</td>
                    </tr>
                </tbody>
            </Table>

            <div className='show-detials'>
                <h2>{`استاد: ${information.master[dis_Profs[group]]}`}</h2>
                <div className='show-button'>

                    <Button variant="dark" onClick={() => setGroup((group + 1 < dis_Profs.length) ? group + 1 : group)}>استاد بعدی</Button>
                    <Button variant="dark" onClick={() => setGroup((group - 1 >= 0) ? group - 1 : group)}>استاد قبلی</Button>

                </div>
            </div>
            <Button variant="primary" style={{ marginTop: '38px' }}
                onClick={() => {
                    history.push('/1')

                }}
            >صفحه اصلی</Button>
            <Button variant="primary" style={{ marginTop: '100px', position:'absolute',left:0 }}
                onClick={() => {
                    history.push('/3')

                }}
            >برنامه ورودی ها</Button>
        </div>
    )


}
function mapStateToProps(state) {
    const { information, enrollment, final, dis_Profs } = state
    return { information, enrollment, final, dis_Profs }
}

export default connect(mapStateToProps)(ShowTime);



