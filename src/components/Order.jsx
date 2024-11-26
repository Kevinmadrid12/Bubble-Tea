import bubble8 from '../img/bubble8.png';
import bubble9 from '../img/bubble9.png';


const Order = () =>{
    return(
        <section class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex items-center bg-pink-300 h-72 dark:bg-rosado dark:text-white">
            <div class="flex flex-col justify-center ml-4 md:ml-14 mb-4 md:mb-16">
                <h1 class="text-2xl w-full md:w-80 pb-4">Lorem ipsum dolor sit amet consectetur.</h1>
                <p class="pb-4">Lorem ipsum</p>
                <button class="bg-[#dae175] rounded-lg w-28 h-9 dark:bg-verde-oscuro">
                    Order now
                </button>
            </div>
            <img src={bubble8} class="w-36 ml-auto pt-10" alt=""/>
        </div>
        <div class="flex items-center bg-[#dae175] h-72 dark:bg-verde-oscuro">
            <div class="flex flex-col justify-center ml-4 md:ml-14 mb-4 md:mb-16">
                <h1 class="text-2xl w-full md:w-80 pb-4">Lorem ipsum dolor sit amet consectetur.</h1>
                <p class="pb-4">Lorem ipsum</p>
                <button class="bg-pink-300 rounded-lg w-28 h-9 dark:bg-rosado">
                    Order now
                </button>
            </div>
            <img src={bubble9} class="w-36 ml-auto pt-10" alt=""/>
        </div>
    </section>
    );
}

export default Order;