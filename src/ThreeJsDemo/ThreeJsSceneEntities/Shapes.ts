import * as THREE from 'three';
import { ISceneEntity, SceneEntityBase } from '../../ThreeJsScaffold/scene.entity';
import { ISceneManager } from '../../ThreeJsScaffold/scene.manager';
import { MTLOBJLoader } from '../../threeJsScaffold/utils/MTLOBJLoader';

// import { OrbitControls } from './jsm/controls/OrbitControls.js';
// import { OrbitControls } from './threeExtras/controls/OrbitControls';
import { FBXLoader } from '../../threeJsScaffold/threeExtras/loaders/FBXLoader';

export class Shapes extends SceneEntityBase implements ISceneEntity {
  constructor(parentSceneManager: ISceneManager, private sideLength: number) {
    super(parentSceneManager);
  }

  init = () => {
    if (true) {
      const loader = new FBXLoader();
      loader.load('images/low-poly-well.fbx', (object: THREE.Object3D) => {
        object.traverse((child: any) => {
          // @ts-ignore
          if (child.isMesh) {
            // console.log('>>>', child);
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        const x = 0.002;
        const a = new THREE.Vector3(x, x, x);
        object.scale.set(x, x, x);
        object.rotateX(Math.PI / 2);
        this._sceneEntityGroup.add(object);
        this._isSceneEntityReady = true;
        this._parentSceneManager.attemptStart();
        // this._sceneEntityGroup.add(new THREE.Mesh());
      });
    } else {
      MTLOBJLoader(
        'images/low-poly-well.mtl',
        'images/low-poly-well.obj',
        10,
        (obj: THREE.Object3D) => {
          obj.traverse((child: any) => {
            // @ts-ignore
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          obj.rotateX(Math.PI / 2);
          this._sceneEntityGroup.add(obj);
          this._isSceneEntityReady = true;
          this._parentSceneManager.attemptStart();
        }
      );
    }
  };

  update = (time: number) => {
    this._sceneEntityGroup.children.forEach(el => {
      // el.rotation.x += 0.01;
      el.rotation.y += 0.001;
    });
  };
}
