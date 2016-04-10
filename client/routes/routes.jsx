import React from 'react';
import {mount} from 'react-mounter';
import StarterLayout from '/client/layouts/starterLayout.jsx';
import Starter from '/client/components/starter.jsx';

FlowRouter.route("/", {
  action () {
    mount(StarterLayout, {
      starter: <Starter />
    });
  }
});