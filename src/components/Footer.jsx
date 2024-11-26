import logoFooter from '../img/cafe-removebg-preview.png';

const Footer = () =>{
    return(
        <footer class="bg-[#614d3e] p-5 dark:bg-cafe">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div class="flex flex-col items-center h-44">
                <div class="w-32 h-24 mt-4">
                    <img src={logoFooter} alt="" class="mx-auto" />
                    <div class="flex flex-row pt-2 justify-center">
                        <div class="text-white pr-4">
                            <a href=""><i class="fa-brands fa-facebook fa-lg"></i></a>
                        </div>
                        <div class="text-white pr-4">
                            <a href=""><i class="fa-brands fa-instagram fa-lg"></i></a>
                        </div>
                        <div class="text-white">
                            <a href=""><i class="fa-brands fa-whatsapp fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-4 text-lg text-white text-center md:text-left">
                <div class="font-bold">
                    <h3>Follow Us</h3>
                </div>
                <ul class="list-none">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div class="pt-4 text-lg text-white text-center md:text-left">
                <div class="font-bold">
                    Contact Info
                </div>
                <ul class="list-none">
                    <li>contactinfo@gmail.com</li>
                    <li>+503 87989898</li>
                    <li>1234 street name, city, country</li>
                </ul>
            </div>
            <div class="pt-4 text-lg text-white text-center md:text-left">
                <div class="font-bold">
                    <h3>Navigation</h3>
                </div>
                <ul class="list-none">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    </footer> 
    );
}

export default Footer;