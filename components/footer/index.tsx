import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="row tm-row">
      <hr className="col-12" />
      <div className="col-md-6 col-12 tm-color-gray">
        Design:
        <Link
          target="_blank"
          href="https://forid-pathan.web.app/"
          className="tm-external-link">
          Forid Pthan
        </Link>
      </div>
      <div className="col-md-6 col-12 tm-color-gray tm-copyright">
        Copyright 2022 Softic Co. Ltd.
      </div>
    </footer>
  );
};

export default Footer;
