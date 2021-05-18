import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pak from './package.json';

export default {
    input: pak.source,
    output: [
        { file: pak.main, format: 'cjs' },
        { file: pak.module, format: 'esm' }
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] })
    ],
    external: Object.keys(pak.peerDependencies || {})
};
