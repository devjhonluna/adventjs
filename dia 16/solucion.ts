type Gifts = number[]
type MaxWeight = number
type Result = number | null

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
   let trineo=0
  let current=0

  for(let i=0; i < gifts.length; i++){
    if (gifts[i]>maxWeight)return null
    if(current + gifts[i] > maxWeight){
      trineo++
      current=gifts[i]
    }else{
      current+=gifts[i]
    }
  }
  if (current>0)trineo++
  return trineo
}
