import React from "react";
const Hello = () => {
  return React.createElement('div', {id: 'Hello', className:'DummyClass'}, React.createElement('h1', null, 'Hello Linakutak'))
}
export default Hello;
import React, { Component } from "react";
import pic from "../images/bg.png";
import winnerURL from "../images/winner.gif";

class Messages extends Component{
 
  constructor(props){
    super()
    console.log(props)
   this._nCount =  parseInt(props.nCount)
    // this.state = {message:"1"}
    
    
  }
  render() { 
    // const state = {
    //   play: false
    // }
    // const audio = new Audio(audioURL)
  
    // const componentDidMount = () =>{
    //   audio.addEventListener('ended', () => this.setState({ play: false }));
    // }
    
    // const componentWillUnmount = () =>{
    //   audio.removeEventListener('ended', () => this.setState({ play: false }));  
    // }
    // const playStopAudio = (toPlay) => {
    //   toPlay? audio.play() : audio.pause();
    // }
    const styles = {
      container: {
        flex: 1,
        height: 80,
        width: 80,
        position: 'relative',
      },
      image: {
        width: 100,
        height: 100, position: 'absolute',
        left:0
        
      },
      imageWin: {
        width: (100*this.props.nCount),
        height: (100*this.props.nCount), position: 'absolute',
        left:0,
        zIndex:(this.props.nCount*this.props.nCount + 105),
        visibility:'hidden'
        
      },
      text: {
        position: 'absolute',
        fontSize: 24,
        fontWeight: 'bold',
        color:'black',
      }
    };
  const isSolvable = () =>{
    return true
  }
  const example = () => {
    // const [postObj, setPostObj] = useState([{  }]);
    let postObj = [];
    let _count = 0;
    for (let i = 0; i < this._nCount; i++) {
      for (let j = 0; j < this._nCount; j++) {
        // setPostObj([...postObj,{_x:j, _y:i, _top:i, _text:++_count}])
        postObj.push({_x:j, _y:i, _text:++_count})
      }
    }
    console.log(postObj)
    return postObj;
  }
  const clickMe = (item) =>{
    // console.log(item.target)
    let _element = item.target
    // console.log(_element.id)
    while(!_element.id){
      _element = item.target.parentNode;
    }
    console.log(div[div.length-1])
    
    var myEle = document.querySelector('[id^="last_"]').id;
    myEle = document.getElementById(myEle)
    // console.log(myEle)
    let _post = _element.id.split("_")
    let _postLast = myEle.id.split("_")
  
    let xEmpty = list[_postLast[1]]._x
    let yEmpty = list[_postLast[1]]._y
    let xClick = list[_post[1]]._x
    let yClick = list[_post[1]]._y
    // console.log(Math.abs(xClick- xEmpty))
    if((Math.abs(xClick- xEmpty) === 1 && yClick === yEmpty) || (Math.abs(yClick- yEmpty) === 1 && xClick === xEmpty )){
 
      _element.style.left = (100 *  list[_postLast[1]]._x)+'px'
      _element.style.top = (100 *  list[_postLast[1]]._y)+'px'
      myEle.id = "last_"+_post[1]
      _element.id = _post[0]+"_"+_postLast[1]
      myEle.style.left = (100 *  list[_post[1]]._x)+'px'
      myEle.style.top = (100 *  list[_post[1]]._y)+'px'
     
    }
    for (let i = 0; i <15; i++) {
      if(document.getElementById(i+"_"+i) === null){            
        win = false
        break;
      }
    }
    console.log(win)
    if(win){

    }
  }

  function shuffle(arra1) {
    var ctr = arra1.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }
     const div = []; 
     const _list = example();
    //  const list = shuffle(_list);
    let list = _list;
    //  while (!isSolvable(list)) {
       list = shuffle(_list)
    //  }
     const RenderTD = () => {
      let _count = 0
      for (let i = 1; i <= this._nCount; i++) {
        for (let j = 1; j <= this._nCount; j++) {
          div.push(<div id={i===(this._nCount )&& j===(this._nCount)?('last_'+_count):(_count+"_"+_count)}  onClick={(e) => clickMe(e)} style={{position: 'absolute',
          left:(100 *  list[_count]._x),
          top:(100 *  list[_count]._y),  visibility:(i===(this._nCount) && j===(this._nCount))?'hidden':'visible',
          width:100, height:100,
          fontFamily: "Arial"}}><img src={pic}  style={styles.image}   alt='test'
          ></img><div  style={{ position: 'absolute', zIndex:_count+100, color: "blue", fontSize: "2em" ,top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'}}>
          {++_count}
          </div></div>)
        }
      }
      div.push(<img src={winnerURL}     alt='test' style={styles.imageWin}
      ></img>)
      return div;
    };
    return (
      
      <div id="container">{RenderTD()}
    </div>
    )
}

}
export default Messages;