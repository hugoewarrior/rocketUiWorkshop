import React, { useEffect, useState } from 'react';
import {
    PolicyDetailsProps,
    ShowPolicyLayout,
    PolicyDetail,
} from '@rocket-ui-mobile/policies';
import testImage from './svg-image';
import { AutoPolicyDetailsProps, fakeVehicleData } from './fake-data';



const mapperVehicle = (data: PolicyDetail) => {
    const autoPolicyDetails = data.policyDetail as AutoPolicyDetailsProps[];
    const autoPolicyDetail = autoPolicyDetails[0];

    const record = {
        summary: {
            'Vehículo Asegurado': [
                autoPolicyDetail.brand,
                autoPolicyDetail.model,
                autoPolicyDetail.vehicleYear,
            ].join(' - '),
            'Num. póliza': [data.policyCode, data.policyNumber].join(''),
            Vigencia: [data.effectiveStartDate, 'al', data.effectiveEndDate].join(
                ' '
            ),
        },
        detail: {
            Contratante: 'Carlos Martínez Gómez',
            'Responsable de pago': 'Carlos Martínez Gómez',
            'Corredor(a)': 'Directo Panamá',
        },
    } as PolicyDetailsProps;
    return record;
};



export const PolicyDetailsExample = () => {
    const [isLoading, setIsLoading] = useState(false);
    const data = fakeVehicleData.find(
        (d) => d.policyID === '336445'
    ) as PolicyDetail;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    const mockFetchPDFUrl = async () => {
        return 'https://apps.assanet.com/servicios_web/webapicanales/poliza/00000002892174/5787790';
    };

    return (
        <ShowPolicyLayout
            title={data.productName}
            data={data || fakeVehicleData[0]}
            mapper={mapperVehicle}
            testID={'policy-details-example'}
            image={testImage}
            loading={isLoading}
            getPDFDocumentUrl={mockFetchPDFUrl}
        />
    );
};

