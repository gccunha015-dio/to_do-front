import { TEnv } from '../@types';

const NODE_ENV = process.env.NODE_ENV;
const env = { ...createEnvForApp('REACT_APP_API'), NODE_ENV };

function createEnvForApp(appName: string): TEnv {
	const env: TEnv = {} as TEnv;

	Object.entries(process.env)
		.filter(([key, _]) => key.startsWith(appName))
		.forEach(([key, value]) => {
			const variable = key.split('-')[1];
			env[variable] = value;
		});

	return env;
}

export default env;
