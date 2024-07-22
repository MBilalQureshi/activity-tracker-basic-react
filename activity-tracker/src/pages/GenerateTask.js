import React,{ useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function GenerateTask(props) {  
  const {name, days, index , removeTask} = props;
  // Initialize an array with 'false' indicating all buttons are initially inactive
  const [activeButtons, setActiveButtons] = useState(Array(days).fill(false));
  // const [backgroundColor, setBackgroundColor] = useState('#00d1b2');
  // const [activeActivities, setActiveActivities] = useState([{
  //   name: '',
  //   days: [],
  // }])

//   const activeDeactiveDay = (name, day) => {
//     console.log('working')
//     // console.log(activeActivities[idx].active)
    
//     // TIP: You can use FindIndex to find the index of the object in the array
//     const activityIndex = activeActivities.findIndex(activity => activity.name === name)
//     console.log(activityIndex)
//     if(activityIndex !== -1){
//       console.log('name exist')
//       // just add day if it doesn't exist
//       if(!activeActivities[activityIndex].days.includes(day)){
//         console.log('Add day, name exist')
//         setActiveActivities([
//           ...activeActivities,
//           activeActivities[activityIndex].days.push(day)
//         ])
//     }else if(activeActivities[activityIndex].days.includes(day)){
//       //if day exist remove it
//       console.log('remove day')
//       setActiveActivities([
//         ...activeActivities,
//         activeActivities[activityIndex].days.filter(dayExist => dayExist !== day)
//       ])
//     }
//   }else{
//     console.log('name not exist, so add name and day')
//     // add new name and day to the array
//     setActiveActivities([
//       ...activeActivities,
//       {
//         name: name,
//         days: [day]
//       }
//     ])
//   }
// }
// console.log(activeActivities)


// const toggleBackgroundColor = () => {
//   setBackgroundColor(currentColor => currentColor === '#00d1b2' ? 'pink' : '#00d1b2'); // Toggle between 'red' and the initial color
// };


const toggleButtonActive = (index) => {
  console.log(activeButtons)
  const updatedActiveButtons = activeButtons.map((isActive, idx) => 
    idx === index ? !isActive : isActive
  );
  setActiveButtons(updatedActiveButtons);
};
  return (
    
    <Container className='mt-5'>
          {
              <Row>
                <Col xs={3}>
                  <div >
                    {name}
                  </div>
                </Col>

                <Col xs={8}>
                {Array.from({ length: days }, (_, index) => (
                    <span key={index}>
                      <Button
                        variant="light"
                        className="m-1"
                        style={{
                          width: '80px',
                          height: '40px',
                          backgroundColor: activeButtons[index] ? 'pink' : '#00d1b2', // Change 'initialColor' as needed
                        }}
                        onClick={() => toggleButtonActive(index)}>
                        {index + 1}
                      </Button>
                    </span>
                  ))}
                </Col>
                <Col>
                  <button onClick={()=> removeTask(index)}>
                    X
                  </button>
                </Col>
              </Row>
          }
    </Container>
  )
}

export default GenerateTask