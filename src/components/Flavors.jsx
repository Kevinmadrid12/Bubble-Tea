import bubble1 from '../img/bubble1.png';
import bubble2 from '../img/bubble2.png';
import bubble3 from '../img/bubble3.png';
import bubble4 from '../img/bubble4.png';
import bubble7 from '../img/bubble7.png';
import bubble6 from '../img/bubble6.png';

const Flavors = () =>{
    return(
        <section class="bg-[#fffef0] pb-10 dark:bg-amarillo">
        <div class="text-xl font-bold text-center pt-4 pb-3">
            <h2>Do you want to try our flavors?</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            <div class="flex flex-col items-center">
                <img src={bubble1} class="w-32"/>
                <div class="text-base text-center">
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <img src={bubble2} class="w-32"/>
                <div class="text-base text-center">
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <img src={bubble3} class="w-32"/>
                <div class="text-base text-center">
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <img src={bubble4} class="w-32"/>
                <div class="text-base text-center">
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <img src={bubble7} class="w-32"/>
                <div class="text-base text-center">
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <img src={bubble6} class="w-32"/>
                <div class="text-base text-center">
                    <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Flavors;