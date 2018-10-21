function shout(string)
{
   return string.toUpperCase() 
}
  
function whisper(string)
{
  return string.toLowerCase()
}

function logShout(string)
{
  console.log(string.toUpperCase());
}

function logWhisper(string)
{
  console.log(string.toLowerCase());
}

function SayHiToGrandma(string)
{
  var lowercase = "I can't hear you!";
  var uppercase = "YES INDEED!";
  var mixed = "I love you, too.";
  
  if (string.toLowerCase() === 'hello'){
    return lowercase;
  }
  else if (string.toUpperCase() === 'HELLO'){
    return uppercase;
  }
  else if ("I love you, Grandma." === "I love you, Grandma."){
    return mixed;  
  }  
}