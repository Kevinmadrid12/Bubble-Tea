import logoNav from '../img/cafe-removebg-preview.png';

const NavBar = () =>{
    return(
        <header class="bg-[#614d3e] h-16 fixed top-0 left-0 w-full z-50 dark:bg-cafe">
        <div class="container mx-auto flex justify-between items-center h-full px-5">
            <nav class="text-white">
                <ul class="flex space-x-4 text-center">
                    <li><a href="" class="hover:underline">Home</a></li>
                    <li><a href="" class="hover:underline">Services</a></li>
                    <li><a href="" class="hover:underline">About Us</a></li>
                    <li><a href="" class="hover:underline">Contact</a></li>
                </ul>
            </nav>
            <div>
                <img src={logoNav} class="w-36 h-10" alt="Cafe Logo"/>
            </div>
            <div class="flex items-center">
                <button class="border-2 border-white text-white rounded-lg w-24 hover:bg-white hover:text-[#614d3e] transition">
                    Buy Now
                </button>
            </div>
        </div>
    </header>
    );
}

export default NavBar;