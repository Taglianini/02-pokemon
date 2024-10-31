import type { JSX } from "astro/jsx-runtime";
import { createSignal, type Component } from "solid-js";

interface Props{
     initValue: number;
     children?: JSX.Element;
}
export const Counter: Component<Props> = (props) => {
     
     const [counter, setCounter] = createSignal(props.initValue);
     

     
     return (
          <>
          {
               props.children
          }
          <h3 class="text-xl">Value: {counter()}</h3>

          <button
               onClick={()=> setCounter((prev)=> ++prev)}
               class="bg-emerald-400 p-2 mr-2 rounded">+1
          </button>
          <button
               onClick={()=> setCounter((prev)=> --prev)}
               class="bg-emerald-400 p-2 mr-2 rounded">- 1
               </button>
          </>
     )


}