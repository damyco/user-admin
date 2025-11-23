const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800">
      <div className="py-12 text-gray-300 text-sm text-center">
        &copy; {currentYear} - User Admin
      </div>
    </footer>
  );
};

export default Footer;
