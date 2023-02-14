import React, { Component } from "react";
import pic from "../images/bg.png";
import winnerURL from "../images/winner.gif";

class MessagesNew extends Component{
 
  constructor(props){
    super()
    console.log(props)
   this._nCount =  parseInt(props.nCount)
    // this.state = {message:"1"}
    
    
  }
  render() { 
    
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
  const isSolvable = (list) =>{
    // console.log(list)
    let _count = 0;
    let _blankAt = 0;
    let _startAt;
    for(let i = 0; i<list.length; i++){
        // console.log(list[_count2++]._text)
        _count += checkInversion(parseInt(list[i]._text), ++_startAt)
    }
    for(let i = 0; i<list.length; i++){
      // console.log(list[i]._text)
      if(parseInt(list[i]._text) !== (this._nCount*this._nCount)){
        _count += checkInversion(parseInt(list[i]._text), i)
      }else if(this.props.nCount % 2 === 0 ){
        console.log("kosong "+ i)
        _blankAt = Math.floor((i+1)/this._nCount)
      }
    }
    if(this.props.nCount % 2 === 1 ){
      return _count%2 === 0 
    }else{
      if((this._nCount - _blankAt)%2 === 0 ){
        return _count%2 === 1 
      }else{
        return _count%2 === 0 
      }
     
    }
  }
  const checkInversion = (toCompare, _startAt) => {
    let _count = 0;
    for(let i = _startAt; i<list.length; i++){
      if(toCompare !== (this._nCount*this._nCount)){
        _count += (toCompare>parseInt(list[i]._text))?1:0
      }
    }
    return _count;
  }
  const example = () => {
    let postObj = [];
    let _count = 0;
    for (let i = 0; i < this._nCount; i++) {
      for (let j = 0; j < this._nCount; j++) {
        console.log((i)*this._nCount + (j+1))
        postObj.push({_text:++_count})
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
    console.log(_element.id)
    let _currentIndex = list.findIndex(x => x._text === parseInt(_element.lastChild.innerHTML));
    let _indexLast = list.findIndex(x => x._text === (this._nCount*this._nCount));
    console.log(_currentIndex)
    let _y = (_indexLast+1)%this._nCount === 0?this._nCount:(_indexLast+1)%this._nCount
    let _x = Math.ceil((_indexLast+1)/this._nCount)
    console.log(_x+"_"+_y)
    let _post = _element.id.split("_")
    console.log(_element.id)
  
    let xEmpty = _x
    let yEmpty = _y
    let xClick = parseInt(_post[0])
    let yClick = parseInt(_post[1])
    if((Math.abs(xClick- xEmpty) === 1 && yClick === yEmpty) || (Math.abs(yClick- yEmpty) === 1 && xClick === xEmpty )){
      console.log('iiiii')
      
      list[_indexLast] = {_text:parseInt(_element.lastChild.innerHTML)}
      document.getElementById(xEmpty+"_"+yEmpty).lastChild.innerHTML = _element.lastChild.innerHTML
      document.getElementById(xEmpty+"_"+yEmpty).style.visibility="visible"
      _element.lastChild.innerHTML = this._nCount*this._nCount
      _element.style.visibility="hidden"
      list[_currentIndex] = {_text:this._nCount*this._nCount};
    }
    let win = true
    console.log(list)
    let _count = 1;
    for (let i = 1; i <= this._nCount; i++) {
      for (let j = 1; j <= this._nCount; j++) {
        if(_count++ !== parseInt(document.getElementById(j+"_"+i).lastChild.innerHTML)){
          win = false
          break;
        }
      }
    }
    
    console.log(win)
    if(win){
      // document.getElementById('win').style.visibility = 'show'
    }
  }

  function shuffle(arra1, _nCount) {
    for (let i = arra1.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arra1[i], arra1[j]] = [arra1[j], arra1[i]];
  }
    
    return arra1;
  }
     const div = []; 
     const _list = example();
     const list = shuffle(_list, this._nCount);
     let _m = "";
     for (let i = 0; i < list.length; i++) {
      _m +=list[i]._text.toString()+(i===(list.length-1)?"":"_")
      // console.log(list[i])
    }
    let position = _m.search("_");
    console.log(position)
    //  while (!isSolvable(list)) {
    //   try {
    //     list = shuffle(_list, this._nCount)
    //   } catch (error) {
        
    //   }
        
    //  }
    console.log(list)
     const RenderTD = () => {
      console.log("PP")
      console.log(list)
      let _count = 0
      for (let i = 0; i < list.length; i++) {
        // console.log(list[i])
      }
      for (let i = 1; i <= this._nCount; i++) {
        for (let j = 1; j <= this._nCount; j++) {
          let _s = list[_count]._text
          console.log(_s)
          div.push(<div id={i+"_"+j}  onClick={(e) => clickMe(e)} style={{position: 'absolute',
          visibility:(_s === (this._nCount*this._nCount))?'hidden':'visible',
          left:(100 *  i),
          top:(100 *  j),  
          width:100, height:100,
          fontFamily: "Arial"}}><img src={pic}  style={styles.image}   alt='test'
          ></img><div   style={{ position: 'absolute', zIndex:_count+100, color: "blue", fontSize: "2em" ,top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'}}>
            {(_s)}
          </div></div>)
          _count++;
        }
      }
      return div;
    };
    return (
      
      <div id="container">{RenderTD()}
      </div>
    )
}

}
export default MessagesNew;