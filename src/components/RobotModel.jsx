import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const RobotModel = ({ mouse }) => {
    const group = useRef();
    const { scene } = useGLTF('https://modelviewer.dev/shared-assets/models/RobotExpressive.glb');

    useFrame(() => {
        if (group.current) {
            group.current.rotation.y = mouse.current.x * 0.5;
            group.current.rotation.x = mouse.current.y * 0.2;
        }
    });

    return <primitive ref={group} object={scene} scale={0.6} position={[0, -1.6, 0]} />;

};

export default RobotModel;
