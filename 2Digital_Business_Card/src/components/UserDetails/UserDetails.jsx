
import './userDetails.css'
import React from "react";

export default function UserDetails() {
    return (
        <div className="user--details">
            <div className="about">
                <h3>About</h3>
                <p>
                    Master Chief, whose full designation is SPARTAN-117 and 
                    whose birth name is John, is the main protagonist of the Halo video game series 
                    created by Bungie and now managed by 343 Industries. 
                    He is a super soldier known as a Spartan-II and 
                    serves as the central character in the franchise.
                </p>
            </div>
            <div className="interests">
                <h3>Interests</h3>
                <p>
                    MasterChief loves driving around the halo especially
                    when it's getting destroyed. He's a highly skilled
                    and experienced warrior. He has leadership qualities.
                    He is also quite curious and keen to learn.
                </p>
            </div>
        </div>
        
    )
}

