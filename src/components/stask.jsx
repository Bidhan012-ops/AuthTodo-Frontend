import Item from "./Item";
function Stask({Itemlist,onclick,setTodos}) {
 
  return <>
  {Itemlist.map(item=>(
  <Item onclick={onclick} key={item._id} item={item} setTodos={setTodos}></Item>
  ))}
  </>
}
export default Stask;
