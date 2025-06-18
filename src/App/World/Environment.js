import * as THREE from 'three';
import App from '../App.js';
import assetStore from '../Utils/AssetStore.js';
import Portal from './Portal.js';
import ModalContentProvider from '../UI/ModalContentProvider.js';

export default class Environment {
	constructor() {
		this.app = new App();
		this.scene = this.app.scene;
		this.physics = this.app.world.physics;
		this.pane = this.app.gui.pane;

		this.assetStore = assetStore.getState();
		this.environment = this.assetStore.loadedAssets.environment;

		this.loadEnvironment();
		this.addLights();
		this.addPortals();
	}

	loadEnvironment() {
		// load environment here
		const environmentScene = this.environment.scene;
		this.scene.add(environmentScene);

		environmentScene.position.set(-4.8, 0, -7.4);
		environmentScene.rotation.set(0, -0.6, 0);
		environmentScene.scale.setScalar(1.3);

		const physicalObjects = [
			'trees',
			'terrain',
			'rocks',
			'stairs',
			'gates',
			'floor',
			'bushes',
		];

		const shadowCasters = [
			'trees',
			'terrain',
			'rocks',
			'stairs',
			'gates',
			'bushes',
		];

		const shadowReceivers = ['floor', 'terrain'];

		for (const child of environmentScene.children) {
			child.traverse((obj) => {
				if (obj.isMesh) {
					obj.castShadow = shadowCasters.some((keyword) =>
						child.name.includes(keyword)
					);
					obj.receiveShadow = shadowReceivers.some((keyword) =>
						child.name.includes(keyword)
					);
					if (physicalObjects.some((keyword) => child.name.includes(keyword))) {
						this.physics.add(obj, 'fixed', 'cuboid');
					}
				}
			});
		}
	}

	addLights() {
		const ambientLight = new THREE.AmbientLight(0xffffff, 1);
		this.scene.add(ambientLight);

		this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		this.directionalLight.position.set(1, 1, 1);
		this.directionalLight.castShadow = true;
		this.directionalLight.shadow.camera.top = 30;
		this.directionalLight.shadow.camera.right = 30;
		this.directionalLight.shadow.camera.left = -30;
		this.directionalLight.shadow.camera.bottom = -30;
		this.directionalLight.shadow.bias = -0.002;
		this.directionalLight.shadow.normalBias = 0.072;
		this.scene.add(this.directionalLight);
	}

	addPortals() {
		const portalMesh3 = this.environment.scene.getObjectByName('portals002');

		const faputaMesh = this.environment.scene.getObjectByName('Faputa');
		const chopperMesh = this.environment.scene.getObjectByName('chopper');
		const chainChompMesh = this.environment.scene.getObjectByName('chomp');
		const booMesh = this.environment.scene.getObjectByName('BOO');
		const goingMerryMesh = this.environment.scene.getObjectByName('GoingMerry');
		const greenHeadsMesh = this.environment.scene.getObjectByName('GreenHeads');
		const japaneseHouseMesh =
			this.environment.scene.getObjectByName('JapaneseHouse');
		const pikachuMesh = this.environment.scene.getObjectByName('Pika');
		const blackThingMesh = this.environment.scene.getObjectByName('BlackThing');
		const bojjiAreaMesh =
			this.environment.scene.getObjectByName('Boji_Outline_0');
		const doodlebobMesh = this.environment.scene.getObjectByName('Doodlebob');
		const stitchMesh = this.environment.scene.getObjectByName('Stitch');
		const sushiMesh = this.environment.scene.getObjectByName('sushi');
		const noodlesMesh = this.environment.scene.getObjectByName('noodz');
		const officeMesh = this.environment.scene.getObjectByName('office');
		const luffyMesh = this.environment.scene.getObjectByName('luffy');

		const modalContentProvider = new ModalContentProvider();

		this.portal = new Portal(
			portalMesh3,
			modalContentProvider.getModalInfo('portal')
		);

		this.faputaPortal = new Portal(
			faputaMesh,
			modalContentProvider.getModalInfo('faputa')
		);

		this.luffyPortal = new Portal(
			luffyMesh,
			modalContentProvider.getModalInfo('luffy')
		);

		this.bojjiPortal = new Portal(
			bojjiAreaMesh,
			modalContentProvider.getModalInfo('bojji')
		);

		this.chopperPortal = new Portal(
			chopperMesh,
			modalContentProvider.getModalInfo('chopper')
		);

		this.doodlebobPortal = new Portal(
			doodlebobMesh,
			modalContentProvider.getModalInfo('doodlebob')
		);

		//

		this.officePortal = new Portal(
			officeMesh,
			modalContentProvider.getModalInfo('office')
		);

		this.booPortal = new Portal(
			booMesh,
			modalContentProvider.getModalInfo('boo')
		);

		this.greenHeadsPortal = new Portal(
			greenHeadsMesh,
			modalContentProvider.getModalInfo('greenHeads')
		);

		this.chainChompPortal = new Portal(
			chainChompMesh,
			modalContentProvider.getModalInfo('chainChomp')
		);

		this.goingMerryPortal = new Portal(
			goingMerryMesh,
			modalContentProvider.getModalInfo('goingMerry')
		);

		this.japaneseHousePortal = new Portal(
			japaneseHouseMesh,
			modalContentProvider.getModalInfo('japaneseHouse')
		);

		this.pikachuPortal = new Portal(
			pikachuMesh,
			modalContentProvider.getModalInfo('pikachu')
		);

		this.blackThingPortal = new Portal(
			blackThingMesh,
			modalContentProvider.getModalInfo('noface')
		);

		this.doodlebobPortal = new Portal(
			doodlebobMesh,
			modalContentProvider.getModalInfo('doodlebob')
		);

		this.stitchPortal = new Portal(
			stitchMesh,
			modalContentProvider.getModalInfo('stitch')
		);

		this.sushiPortal = new Portal(
			sushiMesh,
			modalContentProvider.getModalInfo('sushi')
		);

		this.noodlesPortal = new Portal(
			noodlesMesh,
			modalContentProvider.getModalInfo('noodles')
		);
	}

	loop() {
		this.faputaPortal.loop();
		this.chopperPortal.loop();
		this.portal.loop();
		this.doodlebobPortal.loop();
		this.chopperPortal.loop();
		this.officePortal.loop();
		this.booPortal.loop();
		this.greenHeadsPortal.loop();
		this.chainChompPortal.loop();
		this.goingMerryPortal.loop();
		this.japaneseHousePortal.loop();
		this.sushiPortal.loop();
		this.pikachuPortal.loop();
		this.bojjiPortal.loop();
		this.noodlesPortal.loop();
		this.blackThingPortal.loop();
		this.stitchPortal.loop();
		this.luffyPortal.loop();
	}
}
