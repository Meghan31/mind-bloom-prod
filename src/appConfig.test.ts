// src/appConfig.test.ts
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { configureApp } from './appConfig';
import { testDatabaseUrl } from './testSupport/databaseTestSupport';
import { appServer, AppServer } from './webSupport/appServer';

// Mock the database connection
vi.mock('./lib/prisma', () => ({
	prisma: {
		$queryRaw: vi.fn().mockResolvedValue([{ success: true }]),
	},
}));

describe('configureApp', () => {
	let server: AppServer;

	beforeEach(async () => {
		server = await appServer.start(
			0,
			configureApp({
				databaseUrl: testDatabaseUrl,
				jwtSecret: 'qwerty@qwerty',
				jwtExpiration: '24h',
				port: 8080,
				nodeEnv: 'test',
				openaiApiKey: 'test-api-key',
			})
		);
	});

	afterEach(() => {
		server.stop();
	});

	test('is healthy', async () => {
		const response = await fetch(`${server.address}/health`);

		expect(response.status).toEqual(200);
		expect((await response.json())['status']).toEqual('UP');
	});
});
