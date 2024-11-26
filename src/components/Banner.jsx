import banner from '../img/Boba_Tea-removebg-preview.png';
import '../index.css';

const Banner = () =>{
    return(
        <div class="bg-[#ffebff] p-5 md:p-10 dark:bg-rosado dark:text-white">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col justify-center items-center">
                <h2 class="bubble text-4xl md:text-6xl font-bold pb-5 text-center text-black">
                    Bubble Tea
                </h2>
                <div class="text-center w-full md:w-4/5 text-black">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore veritatis velit laudantium qui eius dolor neque necessitatibus. Fugit doloribus cum in saepe iste ipsam expedita obcaecati rem dolorum quidem?</p>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <img src={banner} alt="" class="w-full h-auto max-w-xs md:max-w-md"/>
            </div>
        </div>
    </div>  
    );
}

export default Banner;