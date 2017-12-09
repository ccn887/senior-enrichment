import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import { addCampus } from '../../reducers/campuses';
// import { NavLink } from 'react-router-dom';


class AllCampuses extends React.Component {
  constructor(props){
  super(props)

  this.state = {
    name: '',
    imgUrl: '',
    description: ''
  }
}
render(){
  const newCampus = this.state
  const campuses = this.props.campuses

return (
    <section id="campus">
    { campuses.map(campus =>{
      console.log("url:", campus.imageUrl)
    return(
      <div key={campus.id}>>
        <div className="campus-profile">
          <div className="campus-wrapper">
            <img id="campus-pic" src={campus.imageUrl}/>
            <h3 className="campus-name">{campus.name}</h3>
            <p className="campus-info">{campus.description}</p>
          </div>
        </div>
      </div>
    )})}
     </section>
)}}

const mapState = (state) => {
  return{
  campuses: state.campuses
  }
};

// const mapDispatch = { addCampus };

export default connect(mapState)(AllCampuses)
