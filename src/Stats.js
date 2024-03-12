export default function Stats({items}){
    if(!items.length){
      return(
      <p className="stats">Start adding your trips needs</p>
    
    )}
   const number = items.length;
   const numPaced = items.filter(item=>item.packed).length;
   const  percentage = Math.round((numPaced/number)*100)
    return(
    <footer className='stats'>
     <em> 
      {percentage===100 ? 'You got everything ready to go' : `You have ${number} items on your list, and you already packed ${numPaced} (${percentage}%)`} </em>
    </footer>
    )
  }
  
  