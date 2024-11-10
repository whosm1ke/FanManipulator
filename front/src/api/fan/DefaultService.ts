import {
    FanStatus,
    IRequestOptions,
    IRequestConfig,
    getConfigs,
    axios,
    basePath
} from './index.defs';

export class DefaultService {
    /** Generate by swagger-axios-codegen */
    // @ts-nocheck
    /* eslint-disable */

    /**
     * Controls the fan status
     */
    fan(
        params: {
            /** Status of the fan (on/off) */
            status?: string;
        } = {} as any,
        options: IRequestOptions = {}
    ): Promise<FanStatus> {
        return new Promise((resolve, reject) => {
            let url = basePath + '/fan';
            const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
            configs.params = {status: params['status']};

            axios(configs, resolve, reject);
        });
    }
}
