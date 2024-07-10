import { UserProfile } from "@clerk/nextjs"

const Profile = () => {
  return (
    <div className="flex justify-center items-center">
        <UserProfile routing="hash"/>
    </div>
  )
}

export default Profile;