import "../assets/CSS/myStyle.css"

function StyleSheet(props){
console.log(props.primary);
let className=props.primary=== "true" ? "primary":"";
console.log(className);
return(
<div>
{/* To apply a class directly, also multiple classes used */}
<h1 className="primary">StyleSheets</h1>
<h1  className="primary font-xl">StyleSheets</h1>
{/* To apply class based on a prop  condition*/}
<h1 className={className}>StyleSheets</h1>
{/* To apply using multiple classes, back, ticks are used */}
<h1 className={`${className} font-xl`}>StyleSheets</h1>
</div>
);
}
export default StyleSheet;