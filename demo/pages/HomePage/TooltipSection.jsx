/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

'use strict';

import React from 'react';
import {SLDSTooltip,SLDSButton} from '../../../components';

import {default as PrismCode} from 'react-prism/lib/PrismCode';

const alignNames = ['left','right','top','bottom'];

module.exports = React.createClass( {

  getDefaultProps () {
    return {};
  },

  getInitialState () {
    return {
      alignIndex:0
    };
  },

  componentDidMount () {
    setInterval ( ()=>{
      this.nextAlign();
    },2000);
  },

  handleOnUpdateHighlighted () {
    console.log('onUpdateHighlighted should be defined');
  },

  handleOnSelect() {
    console.log('onSelect should be defined');
  },

  handleOnClick() {
    console.log('onClick should be defined');
  },

  nextAlign() {
    let nextAlignIndex = this.state.alignIndex+1;
    if (nextAlignIndex >= alignNames.length) {
      nextAlignIndex = 0;
    }
    this.setState({alignIndex:nextAlignIndex});
  },

  render() {
    return (


            <div className="slds-p-around--medium">
              <h3 id='dropdownSection' className="slds-text-heading--medium slds-truncate">
                Tooltip
              </h3>
{/*
              <PrismCode className='language-markup'>
                {require("raw-loader!../../code-snippets/SLDSDropdownPage.txt")}
              </PrismCode>
*/}
              <section style={{paddingLeft:'10rem'}}>
                <div className="slds-p-vertical--large">
                  <p>
                    <SLDSTooltip 
                      key={'align_'+this.state.alignIndex}
                      content={<span>Tooltip with top alignment</span>}
                      align={alignNames[this.state.alignIndex]}>
                      Tooltip align top
                    </SLDSTooltip>
                  </p>
                </div>

                <div ref="super" className="slds-p-vertical--large">
                  <p>
                    <SLDSTooltip 
                      content={<span>Tooltip with bottom alignment</span>}
                      align='bottom'
                      openOnHover={true}
                      targetElement={this.refs.super}>Tooltip open on hover</SLDSTooltip>
                  </p>
                </div>
              </section>


            </div>


    );
  }
});