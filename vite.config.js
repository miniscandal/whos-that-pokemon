import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets-images': '/src/assets/images',

			'@core-constants': '/src/core/constants',
			'@core-services': '/src/core/services',
			'@core-api-rest-endpoints': '/src/core/api-rest-endpoints',

			'@shared-components': '/src/shared/components',
			'@shared-constants': '/src/shared/constants',
			'@shared-contexts': '/src/shared/contexts',
			'@shared-services': '/src/shared/services',
			'@shared-custom-hooks': '/src/shared/custom-hooks'
		}
	}
});
