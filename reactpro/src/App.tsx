import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Hello from "./Components/Hello";
import Greet1 from "./Components/Greet1";
import Fruits1 from "./Components/Fruits1";
import Fruits from "./Components/Fruits";
import Hello1 from "./Components/Hello1";
import FunctionClick from "./Components/FunctionClick";
import UserGreeting from "./Components/UserGreeting";
import Inline from "./Components/Inline";
import StyleSheet from "./Components/StyleSheet";
import './appStyle.css';
import header from './appStyle.module.css';
import Counter from "./Components/Counter";
import Counter1 from "./Components/Counter1";
import ObjectUser from "./Components/ObjectUser";
import ParentComponent from "./Components/ParentComponent";
import Form from "./Components/Form";
import FragmentComp from "./Components/FragmentComp";
import Theme from "./Components/ThemeContext";
import Authentication from "./Components/Authenication";
import ReduceHook from "./Components/ReduceHook";
import ReduceHook1 from "./Components/ReduceHook1";

import Ref from "./Components/Ref";
import RouteDemo from "./RouteDemo";
import ErrorBoundary from "./Components/ErrorBoundary";
import Hero from "./Components/Hero";
import UpdatedComponent from "./Components/UpdatedComponent";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Todo from "./Components/Todo";
import InputField from "./task2";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Calculator from "./Components/Calculator";

import CharacterCounter from "./Components/CharacterCounter";
import BootstrapAccordion from "./Components/BootStrapAccordian";
import Pagination from "./Components/PaginationComponent";

import 'bootstrap/dist/css/bootstrap.min.css';
import FormValidationApp from "./Components/FormValidation";
import MultiStepForm from "./Components/MultiStepForm";
import FaqAccordion from "./Components/FaqAccordian";
import ThemeToggle from "./Components/ThemeToggle";
import PaginationDemo from "./Components/PaginationComponent";
import TaskBoard from "./Components/DragDropTaskBoard";
import TodoApp from "./Components/ToDoApp";
import FormValidation from "./Components/FormValidation1";
import Greeting3 from "./Components/Greeting3";





// App is a function that returns the jsx.element

//app is funcitonal component


function App() {

  // isse product ko us product vale component ke andr dalna h ,n repeat krana h map ki form me

  
  // const seatNumbers = [1, 4, 7, 7, 4, 1];
  // const items = {
  //   ItemName: "Dairy Milk Silk",
  //   ItemCategory: "Chocolate",
  //   price: "Rs:40/-",
  //   related: ["fruit & Nut", "Milky Bar", "5 Star"],
  // };
  return (
    
      <div>

      {/* <Hello1> </Hello1> */}
      {/* <Greet></Greet> */}
     

      {/* <Greet1  name="Robert Isha"  heroName="IronMan">

      <p>Avengers</p>

    </Greet1> */}

      {/* <Fruits type="fruits"></Fruits> */}

      {/* <Fruits1></Fruits1> */}

      {/* <FunctionClick></FunctionClick> */}

      {/* <UserGreeting></UserGreeting/> */}

      {/* <Hello1 name="Isha Jaswal" message="Welcome to React"  seatNumber={seatNumbers} item={items}> </Hello1> */}
      
       {/* <Inline></Inline> */}

       {/* <StyleSheet primary="false"></StyleSheet> */}

       {/* <span class="error">Error</span> */}

       {/* <span class={header.success}>Success</span> */}
        {/* <Counter></Counter> */}
        {/* <Counter1></Counter1> */}
        {/* <HoverCounter></HoverCounter> */}
        {/* <FunctionClick></FunctionClick> */}

        {/* <ObjectUser></ObjectUser> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <Form></Form> */}
        {/* <FragmentComp></FragmentComp> */}
        {/* <Theme></Theme> */}
  {/* <Authentication></Authentication> */}

         {/* <ReduceHook></ReduceHook> */}
         
         {/* <ReduceHook1></ReduceHook1> */}
         
          {/* <Ref></Ref>  */}
          {/* <RouteDemo></RouteDemo>  */}
          {/* <Hero></Hero>  */}
          {/* <ErrorBoundary>
          <Hero heroName={"IronMan"}></Hero>
           </ErrorBoundary> 
          */}
{/* creating state using use state hook */}


{/* //below statehook has empty value */}

 

          {/* <Navbar></Navbar> */}

{/* <Calculator></Calculator> */}

{/* <CharacterCounter></CharacterCounter> */}
{/* <FaqAccordion></FaqAccordion> */}
{/* <ThemeToggle></ThemeToggle> */}
{/* <PaginationDemo></PaginationDemo> */}
{/* <TaskBoard></TaskBoard> */}
{/* <TodoApp></TodoApp> */}

<Stopwatch></Stopwatch>

{/* <BootstrapAccordion></BootstrapAccordion> */}
{/* <MultiStepForm></MultiStepForm> */}




   
            
         

          
          
         
</div>

  );
};
export default App;
