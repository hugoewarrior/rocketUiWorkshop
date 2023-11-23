import { PoliciesDetail } from "@rocket-ui-mobile/policies";

export const fakeVehicleData= [
    {
        policyID: '12356',
        policyCode: '14B',
        certificate: '1',
        isCollective: true,
        planDescription: 'VIDA UNIVERSAL TOPLIFE',
        responsibleName: '42949-19-289944 - NOMBRE DE PRUEBA',
        contractorName: '56217-2-335543 - NOMBRE DE PRUEBA',
        intermediaryName: '42949-19-289944 - NOMBRE DE PRUEBA',
        effectiveStartDate: '26-10-2007',
        effectiveEndDate: '26-10-2008',
        policyNumber: '10161',
        productName: 'VIDA',
        policyDetail: [
            {
                principalInsured: '08-239-1622 - NOMBRE DE PRUEBA',
                othersInsured: ['08-220-1763 - NOMBRE DE PRUEBA'],
                mortgageCreds: ['HSBC BANK (PANAMA), S. A.'],
                insuredAmount: 153550,
            },
        ],
        policyBalance: null,
    },
    {
        policyID: '336445',
        policyCode: '02B',
        certificate: '1',
        planDescription: 'PLAN BASICO DE AUTOMOVIL',
        responsibleName: '08-198-739 - NOMBRE DE PRUEBA',
        contractorName: '08-241-362 - NOMBRE DE PRUEBA',
        intermediaryName: '08-198-739 - NOMBRE DE PRUEBA',
        effectiveStartDate: '03-05-2004',
        effectiveEndDate: '03-05-2005',
        policyNumber: '111993',
        productName: 'AUTOMÓVIL',
        policyDetail: [
            {
                plate: '240960',
                brand: 'NISSAN',
                model: 'SENTRA',
                vehicleYear: 2001,
                motor: 'QG18657473P',
                bodyWork: '3N1CB51S9ZL022280',
                use: 'PARTICULAR',
                mortgageCreds: [
                    '280-134-61098 - NOMBRE DE PRUEBA',
                    '08-738-2083 - NOMBRE DE PRUEBA',
                    '08-352-124 - NOMBRE DE PRUEBA',
                ],
            },
        ],
        policyBalance: null,
    },
    {
        policyID: '36273',
        policyCode: '70BC',
        certificate: '5',
        planDescription: 'METROBLUE ULTRA COLECTIVO',
        responsibleName: '14603-226-141883 - NOMBRE DE PRUEBA',
        contractorName: '42162-114-286829 - NOMBRE DE PRUEBA',
        intermediaryName: '14603-226-141883 - NOMBRE DE PRUEBA',
        effectiveStartDate: '01-10-2000',
        effectiveEndDate: '01-10-2001',
        policyNumber: '524',
        productName: 'SALUD',
        policyDetail: [
            {
                principalInsured: 'PAS. 11290 - NOMBRE DE PRUEBA',
                othersInsured: [
                    '590-89-6029 - NOMBRE DE PRUEBA',
                    '590691829 - NOMBRE DE PRUEBA',
                    '150035129 - NOMBRE DE PRUEBA',
                ],
            },
        ],
        policyBalance: null,
    },
];

export type AutoPolicyDetailsProps = {
    plate: string;
    brand: string;
    model: string;
    vehicleYear: number;
    motor: string;
    bodyWork: string;
    use: string;
    mortgageCreds: string[];
};


export const fakeData: PoliciesDetail[] = [
    {
        effectiveStartDate: '08/MAR/23',
        effectiveEndDate: '08/MAR/24',
        icon: 'faFire',
        policyCertificate: '1',
        isCollective: true,
        policyBalance: {
            balance: '20.00',
            balanceDue: '20.00',
            balanceToday: '20.00',
            currentlyBalance: '0.00',
            days180: '0.00',
            days30: '0.00',
            days60: '0.00',
            days90: '0.00',
            over180: '0.00',
            policyCode: '70T',
            policyNumber: '303030',
            status: {
                icon: '',
                severityChip: 'error',
                value: 'Vencida',
            },
        },
        policyID: '6889006',
        policyNumber: '1234',
        productName: 'Incendio',
        propertyDescription: 'Alexis Mertez',
        showBalance: true,
    },
    {
        effectiveStartDate: '08/MAR/23',
        effectiveEndDate: '08/MAR/24',
        icon: 'faFire',
        policyCertificate: '1',
        isCollective: false,
        policyBalance: {
            balance: '20.00',
            balanceDue: '20.00',
            balanceToday: '20.00',
            currentlyBalance: '0.00',
            days180: '0.00',
            days30: '0.00',
            days60: '0.00',
            days90: '0.00',
            over180: '0.00',
            policyCode: '70T',
            policyNumber: '303030',
            status: {
                icon: '',
                severityChip: 'success',
                value: 'Al día',
            },
        },
        policyID: '12345',
        policyNumber: '1407',
        productName: 'Incendio',
        propertyDescription: 'Maria Perez',
        showBalance: true,
    },
    {
        policyCertificate: '1',
        isCollective: false,
        effectiveStartDate: '08/MAR/23',
        effectiveEndDate: '08/MAR/24',
        icon: 'faFire',
        policyBalance: {
            balance: '20.00',
            balanceDue: '20.00',
            balanceToday: '20.00',
            currentlyBalance: '0.00',
            days180: '0.00',
            days30: '0.00',
            days60: '0.00',
            days90: '0.00',
            over180: '0.00',
            policyCode: '70T',
            policyNumber: '303030',
            status: {
                icon: '',
                severityChip: 'warning',
                value: 'Saldo vencido',
            },
        },
        policyID: '6789',
        policyNumber: '9987',
        productName: 'Incendio',
        propertyDescription: 'Mark Phillips',
        showBalance: true,
    },
];
