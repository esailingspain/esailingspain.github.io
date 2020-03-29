// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const imageStyle = css`
position: absolute;
left: -200px;
z-index: 1;
@media (max-width: 991px) {
    display: none;
}
`;

const FeatureLeftItem = (props) => {
        var {Title, Details, BtnText, Url, Image} = props;
        return(
            <div className="features-item f-br">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="f-content">
                                <h2>{Title}</h2>
                                <p>{Details}</p>
                                <a href={Url} className="btn feature-btn">{BtnText}</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div css={imageStyle}>
                                <img src={require("../../assets/image/" + Image)} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default FeatureLeftItem;