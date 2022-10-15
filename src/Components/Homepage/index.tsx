import React from 'react';

// styles
import HomepageStyles from './styles.module.scss';

// icons
import GithubSVG from 'svg/icons8-github.svg';
import TwitterSVG from 'svg/icons8-twitter.svg';

const Homepage: React.FC = () => {
    return (
        <div className={HomepageStyles['container']}>
            <div className={HomepageStyles['central-heading']}>
                Mohammed Fayaz Salim
            </div>
            <div className={HomepageStyles['link-bar']}>
                <div
                    onClick={() =>
                        window.open(
                            'https://twitter.com/FayazsalimMoha',
                            '_blank'
                        )
                    }
                >
                    <TwitterSVG />
                </div>
                <div
                    onClick={() =>
                        window.open(
                            'https://github.com/Mohammed-Fayaz',
                            '_blank'
                        )
                    }
                >
                    <GithubSVG />
                </div>
            </div>
        </div>
    );
};

export default React.memo(Homepage);
