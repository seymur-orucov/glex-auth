import { Logo, Facebook, Twitter, Youtube } from "../assets/img/icons";
import Google from "../assets/img/google-play.svg";
import AppStore from "../assets/img/app-store.svg";

const Footer = () => {
  const socialIcon =
    "w-[14px] h-[14px] fill-main-orange-900 group-hover:fill-white";
  const socialLink =
    "flex justify-center items-center transition-all w-[40px] h-[40px] border-main-orange-900 rounded-[30px] border-[1px] mr-[24px] group hover:bg-main-orange-900 hover:fill-white";
  const menu = [
    { title: "Tariflər", path: "/tarifler" },
    { title: "Xəbərlər", path: "/xeberler" },
    { title: "Xidmətlər", path: "/xidmetler" },
    { title: "Mağazalar", path: "/magazalar" },
  ];

  const about = [
    { title: "Haqqımızda", path: "/tarifler" },
    { title: "Cox verilən suallar", path: "/xeberler" },
    { title: "İstifadəçi şərtləri", path: "/xidmetler" },
    { title: "Qadağan məhsullar", path: "/magazalar" },
  ];

  const contact = [
    { title: "+994 12 404 04 54", path: "+994 12 404 04 54" },
    { title: "(+994 50) 717 04 54", path: "(+994 50) 717 04 54" },
    { title: "info@glex.az", path: "info@glex.az" },
    { title: "İnşaatçılar pr. 494/20", path: "İnşaatçılar pr. 494/20" },
  ];

  return (
    <>
      <footer className="py-[80px] mx-[80px] bg-main-orange-100 rounded-[24px]">
        <div className="container flex">
          <div className="flex flex-col w-1/4 mr-[120px]">
            <a href="#" className="mb-[48px]">
              <img src={Logo} alt="Glex" />
            </a>
            <p className="font-m-h-regular text-[16px] text-[#1D263A] mb-[24px] opacity-70 leading-[30px]">
              Bizi sosial şəbəkələrdə izləyin
            </p>
            <div className="flex mb-[32px]">
              <a href="#" className="mr-[8px]">
                <img src={Google} alt="Google PlayMarket" />
              </a>
              <a href="#">
                <img src={AppStore} alt="App Store" />
              </a>
            </div>
            <div>
              <ul className="flex">
                <li>
                  <a href="#" className={socialLink}>
                    <Facebook className={socialIcon} />
                  </a>
                </li>
                <li>
                  <a href="#" className={socialLink}>
                    <Twitter className={socialIcon} />
                  </a>
                </li>
                <li>
                  <a href="#" className={socialLink}>
                    <Youtube className={socialIcon} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 px-5">
            <h3 className="font-m-h-semibold text-[14px] text-main-text uppercase mb-[64px]">
              Menyu
            </h3>
            <ul>
              {menu.map(({ title, path }, index) => (
                <li key={index}>
                  <a
                    href={path}
                    className="block font-m-h-regular text-[17px] leading-[30px] text-[#1D263A] opacity-70 hover:opacity-100 transition-all mb-[24px]"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/4 px-5">
            <h3 className="font-m-h-semibold text-[14px] text-main-text uppercase mb-[64px]">
              Faydalı
            </h3>
            <ul>
              {about.map(({ title, path }, index) => (
                <li key={index}>
                  <a
                    href={path}
                    className="block font-m-h-regular text-[17px] leading-[30px] text-[#1D263A] opacity-70 hover:opacity-100 transition-all mb-[24px]"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/4 px-5">
            <h3 className="font-m-h-semibold text-[14px] text-main-text uppercase mb-[64px]">
              Əlaqə
            </h3>
            <ul>
              {contact.map(({ title, path }, index) => (
                <li key={index}>
                  <a
                    href={path}
                    className="block font-m-h-regular text-[17px] leading-[30px] text-[#1D263A] opacity-70 hover:opacity-100 transition-all mb-[24px]"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
