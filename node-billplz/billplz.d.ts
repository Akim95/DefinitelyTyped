// Type definitions for node-billplz
// Project: https://github.com/suhz/node-billplz
// Definitions by: Akim <https://github.com/Akim95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// api options type
interface BillplzOptions {
    key: string;
    endpoint: string;
    sandbox: boolean;
}

// collection type
interface CollectionArguments {
    title: string;
}

// open collection type
interface OpenCollectionArguments {
    title: string;
    description: string;
    amount: number;
    fixed_amount?: boolean;
    fixed_quantity?: boolean;
    payment_button?: string;
    reference_1_label?: string
    reference_2_label?: string;
    email_link?: string;
    tax?: number;
}

// bill type
interface BillArguments {
    collection_id: string;
    email: string;
    mobile: number;
    name: string;
    amount: number;
    callback_url: string;
    description: string;
    due_at?: string;
    redirect_url?: string;
    deliver?: boolean;
    reference_1_label?: string;
    reference_1?: string;
    reference_2_label?: string;
    reference_2?: string;
}

declare class Billplz {
    // constructor
    constructor(options?: BillplzOptions);

    // create_collection 
    create_collection(title: CollectionArguments, callback?: any): void;

    // create collectionOpen
    create_collectionOpen(args: OpenCollectionArguments, callback?: any): void;

    // create bill
    create_bill(args: BillArguments, callback?: any): void;

    // get bill
    get_bill(billId: string, callback?: any): void;

    // delete bill
    delete_bill(billId: string, callback?: any): void;

    // change_collection status
    change_collection_status(collectionId: string, status: string, callback?: any): void;

    // registration check
    registration_check(bankAccountNumber: string, callback?: any): void;
}

declare module "billplz" {
	var bp: typeof Billplz;
	export = bp;
}