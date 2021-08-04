import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const TextStyleVariantMap = {
    paragraph1: css`
        font-size: ${({theme}) => theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${({theme}) => theme.typographyVariants.paragraph1.fontSizeweight};
        line-height: ${({theme}) => theme.typographyVariants.paragraph1.fontSize};
`,
    smallestException: css`
        font-size: ${({theme}) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({theme}) => theme.typographyVariants.smallestException.fontSizeweight};
        line-height: ${({theme}) => theme.typographyVariants.smallestException.fontSize};
`,
}

const TextBase = styled.span`
    ${(props) => TextStyleVariantMap[props.variant]}
`;

export default function Text({ tag, variant,children }) {
    return(
        <TextBase
            as={tag}
            variant={tag}
            >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph',
}
