import React from 'react';
import '../styles/pages/about.scss';
import { Link } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import profile from '../images/about/profile.svg';
import tag from '../images/about/tag.svg';
import instagram from '../images/about/instagram.svg';
import git from '../images/about/git.svg';
import twitter from '../images/about/twitter.svg';
import facebook from '../images/about/facebook.svg';
import linkdein from '../images/about/linkdein.svg';

const About = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            selfIntroduction
          }
          social {
            git
            instagram
            twitter
            linkdein
            facebook
            mail
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <>
      <Layout location={location}>
        <div className="about-page">
          <h2 className="about-name">{author.name}</h2>
          <p className="self-introduction">{author.selfIntroduction}</p>

          <img className="profile-image" src={profile} alt="profile" />
          <div className="about-mail">
            <img src={tag} alt="tag" className="tag-image" />
            <span>{social.mail}</span>
          </div>

          <div className="about-social">
            {social.git ? (
              <div>
                <img src={git} alt="git" onClick={() => window.open(`${social.git}`)} />{' '}
              </div>
            ) : (
              <></>
            )}
            {social.instagram ? (
              <div>
                <img src={instagram} alt="instagram" onClick={() => window.open(`${social.instagram}`)} />
              </div>
            ) : (
              <></>
            )}
            {social.twitter ? (
              <div>
                <img src={twitter} alt="twitter" onClick={() => window.open(`${social.twitter}`)} />
              </div>
            ) : (
              <></>
            )}
            {social.facebook ? (
              <div>
                <img src={facebook} alt="facebook" onClick={() => window.open(`${social.facebook}`)} />
              </div>
            ) : (
              <></>
            )}
            {social.linkdein ? (
              <div>
                <img src={linkdein} alt="linkdein" onClick={() => window.open(`${social.linkdein}`)} />
              </div>
            ) : (
              <></>
            )}
          </div>

          <Link to="/" className="posts-box">
            <p className="posts-text">→ POSTS</p>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default About;
