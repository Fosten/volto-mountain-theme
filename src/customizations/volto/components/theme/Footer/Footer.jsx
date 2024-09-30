/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { injectIntl } from 'react-intl';

import { Logo } from '@plone/volto/components';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => (
  <Segment role="contentinfo" vertical padded inverted color="grey" textAlign="center" id="footer">
    <Container>
      <Segment basic inverted color="grey" className="discreet">
        <div className="footersitemap">
          <div className="footercol1">
            <h2>
              <a href="/land-preservation/gardens">Gardens</a>
            </h2>
            <ul>
              <li>
                <a href="/healthy-food-plants/vegetables">Vegetables</a>
              </li>
              <li>
                <a href="/healthy-food-plants/perennial-flowers">Flowers</a>
              </li>
              <li>
                <a href="/regenerative-practices/crop-rotation">Crop Rotation</a>
              </li>
            </ul>
          </div>
          <div className="footercol2">
            <h2>
              <a href="/land-preservation/chickens">Chickens</a>
            </h2>
            <ul>
              <li>
                <a href="/land-preservation/chickens/egg-layers">Egg Layers</a>
              </li>
              <li>
                <a href="/land-preservation/chickens/meat-broilers">Meat Broilers</a>
              </li>
              <li>
                <a href="/regenerative-practices/free-range">Free Range</a>
              </li>
            </ul>
          </div>
          <div className="footercol3">
            <h2>
              <a href="/land-preservation/orchards">Orchards</a>
            </h2>
            <ul>
              <li>
                <a href="/land-preservation/orchards/apples">Apples</a>
              </li>
              <li>
                <a href="/land-preservation/orchards/blueberries">Blueberries</a>
              </li>
              <li>
                <a href="/land-preservation/orchards/maple">Maple</a>
              </li>
            </ul>
          </div>
          <div className="footercol4">
            <div className="logo">
              <Logo />
              <a href="/">Lilly Mountain</a>
              <div className="slogan">"Homesteading made simple."</div>
            </div>
          </div>
        </div>
      </Segment>
      <Segment basic inverted color="grey" className="discreet">
        {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
        <div className="footerbar">
          <div className="companyinfo">
            <div className="site-email">
              <a href="mailto:info@lillymountain.com">info@lillymountain.com</a>
            </div>
            <div className="powered-by-plone">
              <a href="https://plone.org" target="_blank" rel="noreferrer">
                Powered by Plone
              </a>
            </div>
            <div className="accessibility">
              <a href="/accessibility">Accessibility</a>
            </div>
            <div className="sitemap">
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </Segment>
    </Container>
  </Segment>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
