import bubbletaro from '../img/bubbletaro.jfif';
import bubbleMatcha from '../img/bubble matcha.jfif';
import bubbleCaramel from '../img/bubble caramel.jfif';
import bubblefresa from '../img/bubblefresa.jfif';


const Options = () =>{
    return(
        <section class="bg-[#fffef0] pb-10 dark:bg-amarillo">
        <div class="text-lg font-bold pt-6 pb-3 flex flex-row justify-center items-center flex-wrap">
            <h2 class="px-4">Flavors</h2>
            <h2 class="px-4">Places</h2>
            <h2 class="px-4">Prices</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 mx-4 md:mx-14">
            <div class="p-2 w-full">
                <div class="bg-white rounded-lg border-gray-300 border-2">
                    <div class="overflow-hidden rounded-lg px-10 py-5">
                        <img src={bubbletaro} class="w-full h-48 object-cover" alt="Product image" />
                    </div>
                    <div class="py-3 px-4">
                        <h1 class="text-justify text-lg text-gray-600 font-semibold mb-1">Lorem, ipsum dolor.</h1>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold text-green-600 ml-20">$123</span>
                        </div>
                        <div class="pt-2">
                            <button type="button" class="px-3 py-2 font-semibold w-full rounded-lg bg-pink-300 hover:bg-pink-400 dark:bg-rosado dark:text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-2 w-full">
                <div class="bg-white rounded-lg border-gray-300 border-2">
                    <div class="overflow-hidden rounded-lg px-10 py-5">
                        <img src={bubbleMatcha} class="w-full h-48 object-cover" alt="Product image" />
                    </div>
                    <div class="py-3 px-4">
                        <h1 class="text-justify text-lg text-gray-600 font-semibold mb-1">Lorem, ipsum dolor.</h1>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold text-green-600 ml-20">$123</span>
                        </div>
                        <div class="pt-2">
                            <button type="button" class="px-3 py-2 font-semibold w-full rounded-lg bg-pink-300 hover:bg-pink-400 dark:bg-rosado dark:text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-2 w-full">
                <div class="bg-white rounded-lg border-gray-300 border-2">
                    <div class="overflow-hidden rounded-lg px-10 py-5">
                        <img src={bubbleCaramel} class="w-full h-48 object-cover" alt="Product image" />
                    </div>
                    <div class="py-3 px-4">
                        <h1 class="text-justify text-lg text-gray-600 font-semibold mb-1">Lorem, ipsum dolor.</h1>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold text-green-600 ml-20">$123</span>
                        </div>
                        <div class="pt-2">
                            <button type="button" class="px-3 py-2 font-semibold w-full rounded-lg bg-pink-300 hover:bg-pink-400 dark:bg-rosado dark:text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-2 w-full">
                <div class="bg-white rounded-lg border-gray-300 border-2">
                    <div class="overflow-hidden rounded-lg px-10 py-5">
                        <img src={bubbletaro} class="w-full h-48 object-cover" alt="Product image" />
                    </div>
                    <div class="py-3 px-4">
                        <h1 class="text-justify text-lg text-gray-600 font-semibold mb-1">Lorem, ipsum dolor.</h1>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold text-green-600 ml-20">$123</span>
                        </div>
                        <div class="pt-2">
                            <button type="button" class="px-3 py-2 font-semibold w-full rounded-lg bg-pink-300 hover:bg-pink-400 dark:bg-rosado dark:text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-2 w-full">
                <div class="bg-white rounded-lg border-gray-300 border-2">
                    <div class="overflow-hidden rounded-lg px-10 py-5">
                        <img src={bubblefresa} class="w-full h-48 object-cover" alt="Product image" />
                    </div>
                    <div class="py-3 px-4">
                        <h1 class="text-justify text-lg text-gray-600 font-semibold mb-1">Lorem, ipsum dolor.</h1>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold text-green-600 ml-20">$123</span>
                        </div>
                        <div class="pt-2">
                            <button type="button" class="px-3 py-2 font-semibold w-full rounded-lg bg-pink-300 hover:bg-pink-400 dark:bg-rosado dark:text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>
    );
}

export default Options;