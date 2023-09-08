
const Footer = () => {
    const url = `https://www.linkedin.com/in/jamaanador`
    return (
        <div className='text-center py-10'>
             <p className="px-5 pt-4 text-sm text-primary-300">
        Copyright © 2023 - All right reserved by 
        <a href={url} className="font-bold text-green-500 pl-2" target="https://www.linkedin.com/in/jamaanador">
          Jaman Ador
        </a>
      </p>
        </div>
    );
};

export default Footer;