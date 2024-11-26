import tarobubbletea from '../img/tarobubbletea-removebg-preview.png';
import coffeebubbletea from '../img/coffeebubbletea-removebg-preview.png';

const Contact = () =>{
    return(
        <section class="bg-[#e0e782] p-5 dark:bg-verde-oscuro">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="flex justify-center">
                <img src={tarobubbletea} alt="" class="w-full max-w-xs" />
            </div>
            <div class="flex flex-col justify-center items-center text-center">
                <h1 class="pb-3 text-2xl font-bold text-[#614d3e] dark:text-white">Join in and get 15% off!</h1>
                <p class="pb-3 text-xl text-[#614d3e] dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.</p>
                <div class="flex flex-col md:flex-row md:items-center">
                    <input type="text" class="w-full md:w-56 h-10 border-2 border-[#614d3e] dark: rounded-lg mb-3 md:mb-0" placeholder="  Email address"/>
                    <button class="mt-2 md:mt-0 md:ml-3 text-white rounded-lg bg-[#614d3e] w-full md:w-24 h-10 dark:bg-cafe">Subscribe</button>
                </div>
            </div>
            <div class="flex justify-center">
                <img src={coffeebubbletea} alt="" class="w-full max-w-xs" />
            </div>
        </div>
    </section>
    );
}

export default Contact;