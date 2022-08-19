import styled from "styled-components";

import { Text } from "@/components/core";
import { FormInput } from "@/components/form/inputs";
import * as StyledForm from "@/components/form/main/Form/styled";

export const Wrapper = styled.div`
    height: 100%;

    ${StyledForm.Wrapper} {
        display: grid;
        gap: 24px;
        height: 100%;
        grid-template-columns: 1fr 300px;
    }
`;

export const BasicSettings = styled.div``;

export const Metadata = styled.div`
    background: #fff;
    padding: 32px;
`;

export const MetadataTitle = styled(Text)`
    margin-bottom: 24px;
`;

export const PageInfo = styled.div`
    margin-top: 65px;
    margin-bottom: 32px;
`;

export const PageInfoTitle = styled(Text)`
    margin-bottom: 24px;
`;

export const NameInput = styled(FormInput)`
    border-style: dashed;

    border-radius: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
`;

export const DescriptionInput = styled(FormInput)`
    min-height: 200px;
    background: #fff;
`;
