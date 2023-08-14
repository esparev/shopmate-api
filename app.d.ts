export interface BaseModelProps {
	readonly id: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;
}
type MailPayload = {
	from: string;
	to: string;
	subject: string;
	html: string;
};
