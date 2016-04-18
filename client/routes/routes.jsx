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
import Glossary from '/client/containers/glossary.jsx';
import CharacterBoard from '/client/containers/characterBoard.jsx';


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

FlowRouter.route("/glossary", {
  action () {
    mount(MainLayout, {
      navbar: <Navbar />,
      content: <Glossary />,
      footer: <Footer />
    });
  }
});

FlowRouter.route("/glossaryEntry/:_id", {
  action (params) {
    mount(MainLayout, {
      navbar: <Navbar />,
      content: <GlossaryEntry _id={params._id}/>,
      footer: <Footer />
    });
  }
});

FlowRouter.route("/characterBoard", {
  action (params) {
    mount(MainLayout, {
      navbar: <Navbar />,
      content: <CharacterBoard />,
      footer: <Footer />
    });
  }
});