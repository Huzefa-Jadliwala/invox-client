export type AppRoute = {
	label: string;
	to: string;
	icon?: React.ElementType;
	pathPattern: string;
};

const routes = [
	"invox",
	"formsByDepartment",
	"form",
	"hybridform",
	"departments",
	"formView",
	"formTemplateCreator",
	"users",
	"userNew",
	"userEdit",
] as const;

type Route = (typeof routes)[number];

export type AppRoutes = Record<Route, AppRoute>;
