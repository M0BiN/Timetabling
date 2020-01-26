
import React from 'react';
import './get-input.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import { withRouter } from "react-router";
import ListGroup from 'react-bootstrap/ListGroup'
import store from './redux/store';
import Slide from 'react-reveal/Slide';
import {tempDay,tempEnrollment,tempIsRotation,tempTime} from './temp';
// import { master, course, group, time, day, rotation} from './makeData';


function App({ history }) {

    React.useEffect(() => {
       store.dispatch({type:'SECTOR_CLEAR'}); 
    },[]);
    const { enrollment, information } = store.getState();
    const { master, course, group, time, day, rotation } = information;

    const [state, setState] = React.useState({ master: 0, course: 0, group: 0, time: 0, day: 0, rotation: 1 });
    const [showEnroll, setShowEnroll] = React.useState({ data: [] });


    const enrollTable = showEnroll.data.map((value, index) =>
    <Slide bottom><ListGroup.Item key={`tablenum${index}`}>{`${value}`}</ListGroup.Item></Slide>
    )


    const masterDropDown = master.map((value, index) =>
        <Dropdown.Item as="button" onSelect={(choose) => setState({ ...state, master: choose })}
            eventKey={index}
            key={`master${index}`}
        >{value}</Dropdown.Item>
    );
    const rotationDropDown = rotation.map((value, index) =>
        <Dropdown.Item as="button" onSelect={(choose) => setState({ ...state, rotation: choose })}
            eventKey={index}
            key={`rotation${index}`}
        >{value}</Dropdown.Item>
    );


    const courseDropDown = course.map((value, index) =>
        <div className='dropcontainer'>
            <Dropdown.Item as="button" onSelect={(choose) => setState({ ...state, course: choose })}
                eventKey={index}
                key={`course${index}`}
            >{value}</Dropdown.Item>
        </div>
    );

    const groupDropDown = group.map((value, index) =>
        <div className='dropcontainer'>
            <Dropdown.Item as="button" onSelect={(choose) => setState({ ...state, group: choose })}
                eventKey={index}
                key={`group${index}`}
            >{value}</Dropdown.Item>
        </div>
    );


    const timeDropDown = time.map((value, index) =>
        <div className='dropcontainer'>
            <Dropdown.Item as="button" onSelect={(choose) => setState({ ...state, time: choose })}
                eventKey={index}
                key={`time${index}`}
            >{value}</Dropdown.Item>
        </div>
    );

    const dayDropDown = day.map((value, index) =>
        <div className='dropcontainer'>
            <Dropdown.Item as="button" onSelect={(choose) => setState({ ...state, day: choose })}
                eventKey={index}
                key={`day${index}`}
            >{value}</Dropdown.Item>
        </div>
    );







    return (
        <div className='main-input'>
            <div className='get-input'>

                <DropdownButton id="dropdown-item-button" title={master[state.master]}>
                    {masterDropDown}
                </DropdownButton>
                <DropdownButton id="dropdown-item-button2" title={course[state.course]}>
                    {courseDropDown}
                </DropdownButton>
                <DropdownButton id="dropdown-item-button2" title={group[state.group]}>
                    {groupDropDown}
                </DropdownButton>
                <DropdownButton id="dropdown-item-button2" title={rotation[state.rotation]}>
                    {rotationDropDown}
                </DropdownButton>
                <DropdownButton id="dropdown-item-button2" title={time[state.time]}>
                    {timeDropDown}
                </DropdownButton>
                <DropdownButton id="dropdown-item-button2" title={day[state.day]}>
                    {dayDropDown}
                </DropdownButton>



                <div>
                    <Button variant="secondary" size="lg" block
                        onClick={() => {
                            console.log(information)
                            // enrollment.add([state.master, state.course, state.group]);
                            store.dispatch({
                                type: 'SET_Enrollment',
                                enrollment: [state.master, state.course, state.group],
                                timeEnrollment: (parseInt(state.time) !== 0) ? parseInt(state.time) : false,
                                dayEnrollment: (parseInt(state.day) !== 0) ? parseInt(state.day) : false,
                                rotationEnrollment: (information.rotation[state.rotation] === 'Yes') ? true : false
                            })
                            const newMaster = information.master[state.master];
                            const newCourse = information.course[state.course];
                            const newGruop = information.group[state.group];
                            const newTime = ' - ' + information.time[state.time] + ' - ';
                            const newDay = information.day[state.day] + '';
                            const isRot = information.rotation[state.rotation] === 'Yes' ? '-rotation' : '';
                            let oldShow = showEnroll.data.concat(newMaster + ' - ' + newGruop + ' - ' + newCourse + newTime + newDay + isRot);
                            // timeEnrollment.add((state.time !== 0) ? state.time : false)
                            // dayEnrollment.add((state.day !== 0) ? state.day : false)
                            // rotationEnrollment.add((state.day !== 0) ? state.rotation : false);
                            setShowEnroll({ data: oldShow })

                        }
                        }>
                        Add
                    </Button>
                </div>
            </div>
            <Button variant="success" onClick={() => {
                history.push('/2');
            }}>GO!!!</Button>

            <Button onClick={()=>{
                store.dispatch({
                                type: 'SET_Enrollment_Temp',
                                enrollment: tempEnrollment,
                                timeEnrollment: tempTime,
                                dayEnrollment: tempDay,
                                rotationEnrollment: tempIsRotation
                            })
            }} variant="warning" style={{position:'absolute',left:'0',bottom:'50px'}}>Use Default Value</Button>

            <ListGroup>
                {enrollTable}
            </ListGroup>
        </div>

    );
}

export default withRouter(App);


