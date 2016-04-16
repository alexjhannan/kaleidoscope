// functional modules
import React from 'react';
import {mount} from 'react-mounter';
// layouts
import MainLayout from '/client/layouts/mainLayout.jsx';
// common use components
import Navbar from '/client/components/navbar.jsx';
import Footer from '/client/components/footer.jsx';
// content pages
import Intro from '/client/components/intro.jsx';
import Wiseman from '/client/views/wiseman.jsx';


FlowRouter.route("/", {
  action () {
    mount(MainLayout, {
      navbar: <Navbar />,
      content: <Intro />,
      footer: <Footer />
    });
  }
});

FlowRouter.route("/wiseman", {
  action () {
    mount(MainLayout, {
      navbar: <Navbar />,
      content: <Wiseman />,
      footer: <Footer />
    });
  }
});