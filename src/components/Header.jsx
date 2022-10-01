import { Logo, Phone, User } from "../assets/img/icons";
import Button from "./UI/Button";

const Header = () => {
  const navList = [
    { name: "Əsas", path: "/" },
    { name: "Tariflər", path: "/tarifler" },
    { name: "Xəbərlər", path: "/xeberler" },
    { name: "Xidmətlər", path: "/xidmetler" },
    { name: "Mağazalar", path: "/magazalar" },
    { name: "Haqqımızda", path: "/haqqimizda" },
    { name: "Əlaqə", path: "/elaqe" },
  ];

  return (
    <>
      <header>
        <div className="shadow-custom-b">
          <div className="container py-[1rem] flex justify-between items-center">
            <a href="#">
              <img src={Logo} alt="Glex logo" />
            </a>

            <div className="flex items-center">
              <div className="flex items-center after:block after:w-[1px] after:h-[40px] after:bg-main-stroke after:mx-[32px]">
                <a href="tel:(+994 12) 404 04 54" className="flex items-center">
                  <Phone className="mr-[8px]" />
                  <span className="font-m-m-medium text-[14px] accent-main-black">
                    (+994 12) 404 04 54
                  </span>
                </a>
              </div>
              <a href="#" className="flex items-center">
                <User className="mr-[8px]" />
                <span className="font-m-m-medium text-[16px]">Daxil ol</span>
              </a>
              <Button style="ml-[24px]">Qeydiyyat</Button>
            </div>
          </div>
        </div>

        <nav className="shadow-custom-b">
          <div className="container flex justify-between items-center py-[16px]">
            <ul className="flex">
              {navList.map(({ name, path }, index) => (
                <li key={index} className="pr-[64px] last:pr-0">
                  <a
                    href={path}
                    className="font-m-m-medium text-[16px] hover:underline"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <Button type="filled" style="hover:contrast-125 ml-[24px]">
                Şifariş et
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
